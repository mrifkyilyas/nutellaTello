import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, default: null },
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  },
);

UserSchema.virtual('fullName').get(function() {
  return this.lastName
    ? this.firstName.concat(' ', this.lastName)
    : this.firstName;
});

UserSchema.methods.comparePassword = function(password: string) {
  return bcrypt.compare(password, this.password);
};

const hidden = ['password', '__v'];

UserSchema.methods.toJSON = function() {
  var obj = this.toObject();
  for (var i = hidden.length - 1; i >= 0; i--) {
    delete obj[hidden[i]];
  }
  return obj;
};

UserSchema.pre('save', function(next) {
  const salt = bcrypt.genSaltSync(10);
  let temp = bcrypt.hashSync(this.password, salt);
  this.password = temp;
  next();
});

export { UserSchema };
