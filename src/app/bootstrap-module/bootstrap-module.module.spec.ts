import { BootstrapModuleModule } from './bootstrap-module.module';

describe('BootstrapModuleModule', () => {
  let bootstrapModuleModule: BootstrapModuleModule;

  beforeEach(() => {
    bootstrapModuleModule = new BootstrapModuleModule();
  });

  it('should create an instance', () => {
    expect(bootstrapModuleModule).toBeTruthy();
  });
});
