import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ante Antić',
    email: 'ante@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Miro Mirić',
    email: 'miro@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
