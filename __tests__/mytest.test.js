import { rm, mkdir } from 'fs/promises';
import { SimpleDatabase } from '../utils.js';



describe('simple db', () => {

  const rootDir = './__tests__/store';


  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => {
      return mkdir(rootDir, { recursive: true });
    });
  });

  it('return the id of the item saved', () => {

    const myDb = new SimpleDatabase(rootDir);
    return myDb.save({key:'example data'}).then((id) => {

      expect(id).toEqual(expect.any(String));
    }

  });


  
  it('save an item and then return it back', () => {

    const myDb = new SimpleDatabase(rootDir);
    return myDb.save({key:'example data'}).then((id) => {

      return myDb.get(id).then((res) => {

        expect(res).toEqual({

          id: expect.any(String),
          key: 'example data'
        })

      }) 
    }

  });

});



