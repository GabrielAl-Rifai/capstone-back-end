const daySchema = new mongoose.Schema(

);

const User = mongoose.model('users', userSchema);

module.exports = User;

{
  Day: {
    type: string;
  },
  Chef: {
    type: string;
  },
  Meal: {
    type: string;
  },
}
  
