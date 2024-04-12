//1.
let book = {
  title: "Hitchhiker's guide to the galaxy",
  author: "Douglas Adams",
  numPages: 530
}

// 2
const books = [
  {title: '', author:'', numPages:''},
  {title: '', author:'', numPages:''},
  {title: '', author:'', numPages:''}
]

// 3
function findBook(books, title){
  for(let book of books){
    if(book.title == title){
      return book
    }
  }
  return null
}

// 4

function letterFrequency(str){
  const result = {}
  for(let char of str){
    if(result[char] == undefined){
      result[char] = 1
    }else{
      result[char]++
    }
  }
  return result
}



// 5

function filterByCountry(users, countryCode){
  let filtered = []
  for(let user of users){
    if(user.nat == countryCode){
      filtered.push(user)
    }
  }
  return filtered
}
// 6
function filterByGender(users, gender){
  let filtered = []
  const MALE_TITLES = ["Mr", "Monsieur"]

  for(let user of users){
    if(gender == 'Male' && MALE_TITLES.includes(user.name.title)){
      filtered.push(user)
    }else if(gender == 'Female' && !MALE_TITLES.includes(user.name.title)){
      filtered.push(user)
    }
  }
  return filtered
}
// 7

function listEmails(users){
  const emails = []
  for(let user of users){
    emails.push(user.email)
  }
  return email
}


// 8

function reformatEmail(user){
  const emailParts = user.email.split("@")
  const local = emailParts[0]
  const localParts = local.split(".")
  const firstName = localParts[0]
  const lastName = localParts[1]

  let nat = user.nat.toLowerCase()
  if(nat == 'GB'){ nat = 'co.uk'}
  else if(nat == 'ES'){ nat = 'ee'}
  const newDomain = `evilcorp.${nat}`

  return `${lastName}.${firstName}@${newDomain}`
}

function reformatEmails(users){
  for(let user of users){
    user.email = reformatEmail(user)
  }
}