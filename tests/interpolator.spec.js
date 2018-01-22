/* global expect*/

import { expect } from 'chai';

import urlInterpolator from '../src';

describe('Interpolation test', () => {
  it('Replace the variable', 
    () => expect(urlInterpolator('https://api.com/projects/:projectId', {projectId: 20})).to.equal("https://api.com/projects/20"));
  
  it('Replace all the variables', 
    () => expect(urlInterpolator('https://api.com/projects/:projectId/environments/:envId/:otherId/:otherotherId', {projectId: "20", envId: "foo", otherId: "bar", otherotherId: "barbar"})).to.equal("https://api.com/projects/20/environments/foo/bar/barbar"));
    
  it('Replace only the variable in the params object', 
    () => expect(urlInterpolator('https://api.com/projects/:projectId/environments/:envId', {projectId: 20})).to.equal("https://api.com/projects/20/environments/:envId"));
  
  it('Replace only the variables in the params object', 
    () => expect(urlInterpolator('https://api.com/projects/:projectId/environments/:envId/:otherId/:otherotherId', {projectId: "20", envId: "foo", otherotherId: "barbar"})).to.equal("https://api.com/projects/20/environments/foo/:otherId/barbar"));
    
  it('Allow the user to select an other name for the variable', 
    () => expect(urlInterpolator('https://api.com/projects/:theCoolProjectId', {projectId: 20}, {theCoolProjectId: "projectId"})).to.equal("https://api.com/projects/20"));
});
