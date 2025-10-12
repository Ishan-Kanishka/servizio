-- get total price of orders by customer id
DROP FUNCTION IF EXISTS getTotPriceByCust;
DELIMITER $$
CREATE FUNCTION getTotPriceByCust(custId int)
RETURNS int
DETERMINISTIC
BEGIN
	DECLARE tot_price INT;
    
    IF NOT (custId >= 0) THEN
    	SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = "Invalid customer id";
    END IF;
    
    SELECT SUM(ord.total_price) INTO tot_price
    FROM `orders` ord
    WHERE ord.customer_id = custId;
    
    RETURN tot_price;
END$$

DELIMITER ;

-- get total number of events by date
DROP FUNCTION IF EXISTS getNoOfEventsByDate;
DELIMITER $$
CREATE FUNCTION getNoOfEventsByDate(e_date date)
RETURNS int
DETERMINISTIC
BEGIN
	DECLARE tot_events INT;
    
    
    SELECT SUM(e.event_id) INTO tot_events
    FROM event e
    WHERE e.event_date = e_date;
    
    RETURN tot_events;
END$$

DELIMITER ;

-- get total number of people by date
DROP FUNCTION IF EXISTS getNoOfPeopleByDate;
DELIMITER $$
CREATE FUNCTION getNoOfPeopleByDate(e_date date)
RETURNS int
DETERMINISTIC
BEGIN
	DECLARE tot_people INT;
    
    
    SELECT SUM(e.num_of_people) INTO tot_people
    FROM event e
    WHERE e.event_date = e_date;
    
    RETURN tot_people;
END$$

DELIMITER ;

-- get total number of available tables
DROP FUNCTION IF EXISTS getNoOfAvailableTables;
DELIMITER $$
CREATE FUNCTION getNoOfAvailableTables()
RETURNS int
DETERMINISTIC
BEGIN
	DECLARE tot_tables INT;
    
    
    SELECT SUM(rest.id) INTO tot_tables
    from restaurant_table rest
    WHERE rest.is_available = 0;
    
    RETURN tot_tables;
END$$

DELIMITER ;