interface User {
  id: number
  name: string
  email: string
  active: boolean
}

class UserService {
  private users: User[] = []

  constructor(initialUsers: User[] = []) {
    this.users = initialUsers
  }

  // Test singleQuote: true (should use single quotes)
  addUser(user: User): void {
    console.log('Adding user:', user.name)
    this.users.push(user)
  }

  // Test semi: false (should not add semicolons)
  findUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id)
  }

  // Test arrowParens: "avoid" (should not add parens around single param)
  getActiveUsers(): User[] {
    return this.users.filter(user => user.active)
  }

  // Multiple parameters should keep parentheses
  updateUser(id: number, updates: Partial<User>): boolean {
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex === -1) return false

    this.users[userIndex] = { ...this.users[userIndex], ...updates }
    return true
  }
}

// Arrow functions with single parameter (test arrowParens: "avoid")
const formatUserName = (user: User) => `${user.name} <${user.email}>`
const isActiveUser = (user: User) => user.active
const getUserId = (user: User) => user.id

// Arrow functions with multiple parameters (should keep parens)
const createUser = (name: string, email: string): User => ({
  id: Math.random(),
  name,
  email,
  active: true,
})

// String literals and template strings (test singleQuote: true)
const messages = {
  welcome: 'Welcome to our application!',
  error: 'Something went wrong',
  success: 'Operation completed successfully',
}

// Object with methods and properties (test semi: false)
const userManager = {
  users: [] as User[],

  add(user: User) {
    this.users.push(user)
    console.log('User added successfully')
  },

  remove(id: number) {
    this.users = this.users.filter(user => user.id !== id)
    console.log('User removed')
  },
}

// Example usage
const service = new UserService()
const newUser = createUser('John Doe', 'john@example.com')
service.addUser(newUser)

export { UserService, formatUserName, createUser }
