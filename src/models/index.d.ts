import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Date {
  readonly active?: boolean;
  constructor(init: ModelInit<Date>);
}

export declare class PermissionRole {
  readonly id: string;
  readonly permissionId?: string;
  readonly RoleId?: string;
  readonly deactivatedDate?: string;
  readonly active?: boolean;
  readonly modifiedDate?: string;
  readonly createDate?: number;
  constructor(init: ModelInit<PermissionRole>);
  static copyOf(source: PermissionRole, mutator: (draft: MutableModel<PermissionRole>) => MutableModel<PermissionRole> | void): PermissionRole;
}

export declare class Organisations {
  readonly id: string;
  readonly name?: string;
  readonly parentOrganisation?: string;
  readonly createDate?: number;
  readonly active?: boolean;
  readonly deactivatedDate?: string;
  readonly modifiedDate?: string;
  constructor(init: ModelInit<Organisations>);
  static copyOf(source: Organisations, mutator: (draft: MutableModel<Organisations>) => MutableModel<Organisations> | void): Organisations;
}

export declare class Permissions {
  readonly id: string;
  readonly Permission?: string;
  readonly AccessDefinition?: string;
  readonly active?: boolean;
  readonly deactivatedDate?: string;
  readonly createDate?: string;
  readonly modifiedDate?: string;
  constructor(init: ModelInit<Permissions>);
  static copyOf(source: Permissions, mutator: (draft: MutableModel<Permissions>) => MutableModel<Permissions> | void): Permissions;
}

export declare class Contacts {
  readonly id: string;
  readonly name?: string;
  readonly lastName?: string;
  readonly roleId?: number;
  readonly email?: string;
  readonly active?: boolean;
  readonly deactivatedDate?: string;
  readonly modifedDate?: string;
  readonly createdDate?: number;
  constructor(init: ModelInit<Contacts>);
  static copyOf(source: Contacts, mutator: (draft: MutableModel<Contacts>) => MutableModel<Contacts> | void): Contacts;
}

export declare class Role {
  readonly id: string;
  readonly RoleName?: string;
  readonly active?: boolean;
  readonly deactivatedDate?: string;
  constructor(init: ModelInit<Role>);
  static copyOf(source: Role, mutator: (draft: MutableModel<Role>) => MutableModel<Role> | void): Role;
}

export declare class ContactsRole {
  readonly id: string;
  readonly contactId?: string;
  readonly roleId?: string;
  readonly active?: Date;
  readonly deactivatedDate?: string;
  readonly modifiedDate?: string;
  readonly deleteDate?: string;
  readonly createdDate?: number;
  constructor(init: ModelInit<ContactsRole>);
  static copyOf(source: ContactsRole, mutator: (draft: MutableModel<ContactsRole>) => MutableModel<ContactsRole> | void): ContactsRole;
}