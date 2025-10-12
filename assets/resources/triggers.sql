CREATE TRIGGER `before_phone_insert` BEFORE INSERT ON `user_phone_numbers`
 FOR EACH ROW BEGIN
    DECLARE cx INT;

    SELECT COUNT(*) INTO cx
    FROM user_phone_numbers
    WHERE phone_numbers = NEW.phone_numbers
      AND user_id <> NEW.user_id;

    IF cx > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Duplicate phone number detected!';
    END IF;
END

CREATE TRIGGER `customer_exist` BEFORE INSERT ON `user`
 FOR EACH ROW BEGIN
    DECLARE userId BIGINT;

    SELECT id INTO userId
    FROM `user`
    WHERE email = NEW.email
    LIMIT 1;

    IF userId IS NOT NULL THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'A customer with this email already exists!';
    END IF;
END
