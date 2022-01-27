import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {SimpleRef} from "src/store/models/simple-ref.model";
import {ICrudHttpService} from "./crud.http.factory";


export class CrudHttpMockService implements ICrudHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(apiDomen: string): Observable<SimpleRef[]> {
    switch (apiDomen) {
      case "service":
        return this.getServices();
      case "improvement-types":
        return this.getImprovementTypes();
      case "providers":
        return this.getProviders();
      case "rate-groups":
        return this.getRateGroups();
      default:
        throw new Error("Method not implemented.");

    }
  }

  private getServices(): Observable<SimpleRef[]> {

    return of([
      {
        id: "someServiceID",
        present: "Холодная вода"
      }
    ])
  }

  private getImprovementTypes(): Observable<SimpleRef[]> {

    return of([
      {
        id: "someServiceID",
        present: "Вид благоустройства 1"
      },
      {
        id: "someServiceID",
        present: "Вид благоустройства 2"
      },
      {
        id: "someServiceID",
        present: "Вид благоустройства 3"
      },
      {
        id: "someServiceID",
        present: "Вид благоустройства 4"
      },
      {
        id: "someServiceID",
        present: "Вид благоустройства 5"
      },
      {
        id: "someServiceID",
        present: "Вид благоустройства 6"
      }
    ])
  }

  private getProviders() {
    return of([
      {
        id: "someServiceID",
        present: "Поставщик 1"
      },
      {
        id: "someServiceID",
        present: "Поставщик 2"
      },
      {
        id: "someServiceID",
        present: "Поставщик 3"
      }
    ])
  }

  private getRateGroups() {
    return of([
      {
        id: "someServiceID",
        present: "Тарифная группа 1"
      },
      {
        id: "someServiceID",
        present: "Тарифная группа 2"
      },
      {
        id: "someServiceID",
        present: "Тарифная группа 3"
      }
    ])
  }
}
