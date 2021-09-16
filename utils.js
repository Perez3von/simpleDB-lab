import { readFile, writeFile } from 'fs/promises';
import shortid from 'shortid';
import path from 'path';


export class SimpleDatabase {

  constructor(rootDir){
    this.path = rootDir;
    //const fileName = `${shortid.generate()}.txt`;
    //this.file = path.join(rootDir, fileName);

  }

  save(obj) {
    obj.id = shortid.generate();
    const filename = `${obj.id}.json`;
    const des = path.join(this.path, filename);
    return writeFile(des, JSON.stringify(obj.id)).then(() => {
      return filename; 
    });
  }

  get(id){


    // return readFile(this.file, 'utf-8'/* function to handle json parsing*/).catch((err) => {
    //   if(err.code === 'ENOENT') return null;
    //   throw err;
    // });
    const filename= path.join(this.path, id);
    return readFile(filename)
      .then((res) => {
        return JSON.parse(res);
      })
      .catch(() => {
        return null;
      });

  }

  getAll() {
    return readFile(this.path).then((f) => {
      return Promise.all(
        f.map((file) => {
          return this.get(file);
        })
      );
    });
  }

}
