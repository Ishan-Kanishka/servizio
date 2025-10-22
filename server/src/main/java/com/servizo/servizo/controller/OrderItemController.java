package com.servizo.servizo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.DTO.OrderItemDTO;
import com.servizo.servizo.model.Menu;
import com.servizo.servizo.model.Order;
import com.servizo.servizo.model.OrderItem;
import com.servizo.servizo.model.OrderItemID;
import com.servizo.servizo.repo.MenuRepo;
import com.servizo.servizo.repo.OrderItemRepo;
import com.servizo.servizo.repo.OrderRepo;
import com.servizo.servizo.service.OrderItemService;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/order-items")
public class OrderItemController {

    @Autowired
    private OrderItemService orderItemService;
    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private MenuRepo menuRepo;

    @GetMapping("/by-order/{orderId}")
    public ResponseEntity<GeneralResDTO> getItemsByOrder(@PathVariable Long orderId) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Optional<Order> orderOpt = orderRepo.findById(orderId);
            if (orderOpt.isEmpty()) {
                res.setResponse(HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.getReasonPhrase(), null);
                return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
            }

            List<OrderItem> all = orderItemService.getItemsByOrderId(orderId);
            List<OrderItem> items = all.stream()
                    .filter(oi -> oi.getOrder() != null && oi.getOrder().getOrderId().equals(orderId)).toList();
            if (items.isEmpty()) {
                res.setResponse(HttpStatus.NO_CONTENT.value(), HttpStatus.NO_CONTENT.getReasonPhrase(), null);
                return new ResponseEntity<>(res, HttpStatus.NO_CONTENT);
            }
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), items);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<GeneralResDTO> addItemToOrder(@RequestParam("orderId") Long orderId,
            @RequestBody OrderItemDTO dto) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Optional<Order> orderOpt = orderRepo.findById(orderId);
            if (orderOpt.isEmpty()) {
                res.setResponse(HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.getReasonPhrase(), null);
                return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
            }
            Optional<Menu> menuOpt = menuRepo.findById(dto.getMenu_id());
            if (menuOpt.isEmpty()) {
                res.setResponse(HttpStatus.BAD_REQUEST.value(), "Menu not found", null);
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            }

            Order order = orderOpt.get();
            Menu menu = menuOpt.get();

            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setMenu(menu);
            orderItem.setQuantity(dto.getQuantity());
            orderItem.setPrice(menu.getPrice() * dto.getQuantity());
            orderItem.setOrderItemId(new OrderItemID(order.getOrderId(), menu.getMenuId()));

            OrderItem saved = orderItemService.saveOrderItem(orderItem);
            res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), saved);
            return new ResponseEntity<>(res, HttpStatus.CREATED);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping
    public ResponseEntity<GeneralResDTO> deleteItem(@RequestParam("orderId") Long orderId,
            @RequestParam("menuId") Long menuId) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            OrderItemID id = new OrderItemID(orderId, menuId);
            boolean orderItemOpt = orderItemService.deleteItem(id);
            if (!orderItemOpt) {
                res.setResponse(HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.getReasonPhrase(), null);
                return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
            }
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
