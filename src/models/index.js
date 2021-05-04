// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PermissionRole, Organisations, Permissions, Contacts, Role, ContactsRole, Date } = initSchema(schema);

export {
  PermissionRole,
  Organisations,
  Permissions,
  Contacts,
  Role,
  ContactsRole,
  Date
};