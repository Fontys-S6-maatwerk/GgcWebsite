import http from '@/services/http';

export default class TwitterbotService{

    public async GetCurrentTime(): Promise<String>{
        const response = await http.get('/api/bot/currenttime');
        return response.data;
    }

    public async SetCurrentTime(newTime: String){
        console.log(newTime);
        const response = await http.post('/api/bot/settime', newTime);
        return response.data;
    }
}
export const twitterbotService =  new TwitterbotService();