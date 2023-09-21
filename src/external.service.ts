import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { catchError, lastValueFrom, map } from "rxjs";

@Injectable()
export class ExternalService{

    constructor(
        private http: HttpService
    ){ }

    async request(){
        const endpoint = `https://newsapi.org/v2/top-headlines?country=mx&category=entertainment&apiKey=0a6a925ca1454ac08f7fa5935b52b40b&pageSize=10`

        const request = this.http.get(endpoint)
            .pipe(map((res) => res.data))
            .pipe(
                catchError((err) => {
                    const errorMessage: any = {
                     
                    };
                    throw new InternalServerErrorException(errorMessage);
                }),
            );
                
        const response: any = await lastValueFrom(request);
        console.log(response)
        
       
    }

}