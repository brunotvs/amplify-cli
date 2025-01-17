import {
  initJSProjectWithProfile, deleteProject, createNewProjectDir, deleteProjectDir,
} from '@aws-amplify/amplify-e2e-core';
import { testSchema } from '../schema-api-directives';

describe('api directives @function', () => {
  let projectDir: string;

  beforeEach(async () => {
    projectDir = await createNewProjectDir('function');
    await initJSProjectWithProfile(projectDir, {});
  });

  afterEach(async () => {
    await deleteProject(projectDir);
    deleteProjectDir(projectDir);
  });

  it('function usage', async () => {
    const testresult = await testSchema(projectDir, 'function', 'usage');
    expect(testresult).toBeTruthy();
  });

  it('function example1', async () => {
    const testresult = await testSchema(projectDir, 'function', 'example1');
    expect(testresult).toBeTruthy();
  });

  it('function example2', async () => {
    const testresult = await testSchema(projectDir, 'function', 'example2');
    expect(testresult).toBeTruthy();
  });
});
