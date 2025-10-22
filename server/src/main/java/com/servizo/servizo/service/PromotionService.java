package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Promotion;
import com.servizo.servizo.repo.PromotionRepo;

@Service
public class PromotionService {
    @Autowired
    private PromotionRepo promotionRepo;

    public List<Promotion> getAll() {
        return promotionRepo.findAll();
    }

    public Promotion getById(Long id) {
        return promotionRepo.findById(id).orElse(null);
    }

    public Promotion save(Promotion promotion) {
        return promotionRepo.save(promotion);
    }

    public Promotion update(Promotion promotion) {
        return promotionRepo.save(promotion);
    }

    public void delete(Long promotionId) {
        promotionRepo.deleteById(promotionId);
    }
}
