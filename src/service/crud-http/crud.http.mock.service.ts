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
        return CrudHttpMockService.getServices();
      case "improvement-types":
        return CrudHttpMockService.getImprovementTypes();
      case "providers":
        return CrudHttpMockService.getProviders();
      case "rate-groups":
        return CrudHttpMockService.getRateGroups();
      case "direction-of-uses":
        return CrudHttpMockService.getDirectionOfUses();
      default:
        throw new Error("Method not implemented.");

    }
  }

  private static getServices(): Observable<SimpleRef[]> {

    return of([
      {
        id: "someServiceID",
        present: "Холодная вода"
      }
    ])
  }

  private static getImprovementTypes(): Observable<SimpleRef[]> {

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

  private static getProviders() {
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

  private static getRateGroups() {
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

  private static getDirectionOfUses() {
    return of([
      {
        id: "directionOfUseId1",
        present: "Направление 1"
      },
      {
        id: "directionOfUseId2",
        present: "Направление 2"
      },
      {
        id: "directionOfUseId3",
        present: "Направление 3"
      }
    ])
  }
}
