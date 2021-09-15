import { rm, mkdir } from 'fs/promises';



describe('simple db', () => {

  const rootDir = './__tests__/store';


  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => {
      return mkdir(rootDir, { recursive: true });
    });
  });

  it('creates a db folder', () => {

    const myDb = new SimpleDatabase(rootDir);




  });


});



