import { Container } from 'typedi';
import { TYPES_STRING } from 'common/bindings/types';
import ProjectService from './services/ProjectService';

Container.set(TYPES_STRING.ProjectService, new ProjectService());
