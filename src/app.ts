import { CompanyEntity, UserEntity } from './entities';
import { dataSource } from './config/database';

const bootstrap = async () => {
  await dataSource.initialize();

  const userRepository = dataSource.getRepository(UserEntity);
  const companyRepository = dataSource.getRepository(CompanyEntity);

  const updateUser = async () => {
    let company = (await companyRepository.find()).shift();

    if (!company) {
      company = companyRepository.create({ name: 'First company' });
      company = await companyRepository.save(company);
    }

    const user =
      (await userRepository.find({ relations: { companies: true } })).shift() ||
      userRepository.create({ name: 'First User', companies: [company] });

    user.lastActivity = new Date();

    const updatedUser = await userRepository.save(user);
    console.log('\nupdatedUser:', updatedUser, '\n');
  };

  await updateUser();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await updateUser();
};

bootstrap();
