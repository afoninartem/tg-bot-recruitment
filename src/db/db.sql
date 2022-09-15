create TABLE candidates(
  id SERIAL PRIMARY KEY,
  phone VARCHAR(11),
  chat_id VARCHAR(255)
);

create TABLE results(
  id SERIAL PRIMARY KEY,
  test VARCHAR(255),
  results VARCHAR(8000),
  test_date VARCHAR(255),
  candidate_id INTEGER,
  FOREIGN KEY (candidate_id) REFERENCES candidates (id)
);