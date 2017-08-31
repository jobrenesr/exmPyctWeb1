var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id :            {type: String, required: true, unique: true},
  name:           {type: String, required: true},
  alias:        {type: String, required: false},
  money:      {type: String, required: false},
  photo:          {type: String, required: true}
});

module.exports = mongoose.model('users', UserSchema);



/* NO BORRAR
{
  "foo": 1,
  "v": 1,
  "unique": true,
  "key": {
    "email": 1
  },
  "name": "email_1",
  "ns": "db_fct.users",
  "background": true
}
*/
