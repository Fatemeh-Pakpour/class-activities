use hyf19;
-- select * from task;
-- 1) update take with id = 4 to done status
-- UPDATE task
-- SET status_id = 3
-- WHERE id = 4;
-- 2) delete a task 
-- DELETE FROM task 
-- WHERE id =1;
-- 3) show the three first title
-- SELECT title 
-- FROM task 
-- LIMIT 3;
-- 4)  smallest value of the id column.
-- SELECT MIN(id) AS "First_id" 
-- FROM task ;
-- 5) avarage , sum, count from id
-- SELECT AVG(id) AS "average"
 -- FROM task ;
 -- SELECT COUNT(id) AS "count id"
 -- FROM task;
 -- SELECT SUM(id) AS "sum"
 -- FROM task;
 -- 6) using LIKE operator
 -- SELECT title 
 -- FROM task
 -- WHERE title LIKE "_r%";
 SELECT * 
 FROM task
 WHERE title LIKE "b%";
 -- SELECT * FROM task
 -- RIGHT OUTER JOIN status 
 -- ON user_id.task = id.status;
 -- 7) self join 
 SELECT task.title AS 'Title_Table1' , task.title AS 'Title_Table2'
 
 
 
 
 






