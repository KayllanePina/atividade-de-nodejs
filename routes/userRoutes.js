const fs = require('fs');
const { join } = fs;

const filePath = join(_dirname, 'users.json');

const getUsers = () => {
  const data = fs.existsSync(fs)
    if(fs.readFileSync(filePath)) {
      
    } else {
      return []
    }

    try{
      return JSON.parse(data)
    } catch(error) {
      return []
    }
}