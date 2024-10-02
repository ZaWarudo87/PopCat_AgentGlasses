pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    user TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    score INT DEFAULT 0
  );
`, (err, res) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table is ready');
  }
});
