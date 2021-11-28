import  RNSQLite from "@babel/types"

class SQLite{
    constructor() {
        RNSQLite.DEBUG(true)
        RNSQLite.enablePromise(true)
        this.conn = null

        RNSQLite.openDatabase("test.dat", "1.0", "Test Database")
            .then(db => {
                this.conn = db
                console.log("DB:", db);

                db.executeSql('CREATE TABLE IF NOT EXISTS Employees('
                    + 'id INTEGER PRIMARY KEY NOT NULL, '
                    + 'name VARCHAR(255) NOT NULL);'
                )

                    .then(() => console.info("Table initialized"))
                .catch(error => console.warn ("ERROR: ", error))
            })
            .catch(error => console.warn("ERROR: ", error))
        
    }
}

export default SQLite