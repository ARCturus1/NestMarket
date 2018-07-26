import { ProductStoreModule } from './product-store.module';

describe('ProductStoreModule', () => {
  let productStoreModule: ProductStoreModule;

  beforeEach(() => {
    productStoreModule = new ProductStoreModule();
  });

  it('should create an instance', () => {
    expect(productStoreModule).toBeTruthy();
  });
});
