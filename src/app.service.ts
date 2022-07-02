import { HttpService } from '@nestjs/axios';
import { Injectable} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getPrevisao(estado:string) {
    console.log(estado)
    const estadoEspacado = estado.split('+').join(' ')
    const url = 
      `https://api.openweathermap.org/data/2.5/weather?q=${estadoEspacado}&appid=1c7751f0dac112b06262e29aefcfcb32`;
    const { status, data } = await firstValueFrom(this.httpService.get(url));
    if (status == 200) {
      return data;
    }
  }
}
