export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`)
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`
  )
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age)
}

export function getPeopleNamesOlderThan(people, age) {
  let olderPeople = people.filter((person) => person.age > age)
  const fullNames = olderPeople.map((person) => `${person.firstName} ${person.lastName}`)
  return fullNames
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName)
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id)
}

export function isAnyoneOlderThan(people, age) {
  return people.some(person => person.age > age)


}

export function getFullNamesSortedByAge(people) {
  const sortedPeople = people.sort((person1, person2) => {
    const age1 = person1.age
    const age2 = person2.age
    if (age1 < age2) {
      return -1
    }
    if (age1 > age2) {
      return 1
    }
    return 0

  })
 const reallysorted =  sortedPeople.map((person) => `${person.firstName} ${person.lastName}`)
 return reallysorted
}
