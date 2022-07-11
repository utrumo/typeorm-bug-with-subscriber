import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';
import { CompanyEntity } from '../entities';

@EventSubscriber()
export class CompanySubscriber implements EntitySubscriberInterface<CompanyEntity> {
  public listenTo() {
    return CompanyEntity;
  }

  public async afterLoad(entity: CompanyEntity) {
    entity.countUsers = 1;
  }
}
