import request from 'superagent'

const CALENDAR_ID = '815543287558-eol57meelpjpba4u65f6b5712ltho5l5.apps.googleusercontent.com'
const API_KEY = 'AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        for(let i = 0; i < events.size; i++){
          console.log(events[i])
        }
        callback(events)
      }
    })
}
