class Event {
  constructor(title, keywords) {
    this.title = title;
    this.keywords = keywords;
  }
}
class User {
  constructor(name, interests) {
    this.title = name;
    this.keywords = interests;
  }

  matchInterests(event) {
    return event.keywords.some(function(word) {
      return this.interests.include(word);
    })
  }
}
