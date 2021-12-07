import { TweetTimeDTO } from '@/dto/TweetTimeDTO'
import http from '@/services/http'
import axios from 'axios'

export default class TwitterbotService {
  public async GetCurrentTime () {
    const response = await http.get('http://localhost:5011/api/tweet/gettime')
    return response.data
  }

  // const response = await http.post('https://localhost:5001/api/twitter/adjusttime', newTime)
  public async SetCurrentTime (newTime: TweetTimeDTO) {
    const response = await http.post('http://localhost:5011/api/tweet/adjusttime', newTime)
    return response.data
  }
}
export const twitterbotService = new TwitterbotService()
