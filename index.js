const PORT = 8080; //개발 테스트용 포트
const express = require('express'); // express 모듈을 가져옴
const database = require('./database/database');

const app = express(); //express 기능 app에 담기

app.use(express.json()); //express에 json사용 (json 파싱 기능)

app.get('/', (req, res) => {
  res.send('Hello World!! node nodemon Test'); //nodemon으로 start를 한다면 바뀔때마다 새로 서버를 재동작 시킬 필요가 없다.
});

app.get('/nodeDBTest', async (req, res) => {
  try {
    const results = await database.query('SELECT * FROM test_db');
    return res.status(200).json(results.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); //서버가 동작하는지 확인하는 코드
