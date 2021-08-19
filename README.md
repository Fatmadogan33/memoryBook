To run:
```bash
yarn start 
```

Database Properties :
```
  POSTGRES_DB = "memory";
  POSTGRES_URL = "postgres://postgres:123@localhost:/memory";
  PORT = 5432;
  public PASSWORD = "123";
```

Table Create Script

```sql
CREATE TABLE public.memory
(
    memory_id integer NOT NULL,
    title character varying(100) COLLATE pg_catalog."default",
    date character varying(50) COLLATE pg_catalog."default",
    memory character varying(1000) COLLATE pg_catalog."default",
    location character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT memory_pkey PRIMARY KEY (memory_id)
)
```


