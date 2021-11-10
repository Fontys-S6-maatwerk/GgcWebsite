import http from '@/services/http';

export default class TwitterbotService{

    public async GetCurrentTime(){
        const response = await http.get('/api/twitter/currenttime');
        return response.data;
    }

    public async SetCurrentTime(newTime: String){
        console.log(newTime);
        const response = await http.post('/api/twitter/settime', newTime);
        return response.data;
    }
}
export const twitterbotService =  new TwitterbotService();