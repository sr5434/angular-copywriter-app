import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from "openai";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WriterService {
  configuration = new Configuration({
    apiKey: environment.apiKey,
  });
  openai = new OpenAIApi(this.configuration);

  async write(description:any){
    const chatCompletion = await this.openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "system", content: "You are a bot that writes ad copies. Only write the ad, nothing else."}, {role: "user", content: "Write me an ad based on the product: " + description}],
    });
    return chatCompletion.data.choices[0].message?.content;
  }
}
