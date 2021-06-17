# Interface: CdpMenuListConfig

## Properties

### anchorPropsFn

• **anchorPropsFn**: (`href`: `string`) => { `href`: `string` ; `onClick`: (`ev`: `MouseEvent`) => `void`  } & `AnchorHTMLAttributes`<HTMLAnchorElement\>

**`description`** Overwrite the href property of anchor element to fit your application router

**`description`** Overwrite the onclick event of anchor element to fit your application router

#### Type declaration

▸ (`href`): { `href`: `string` ; `onClick`: (`ev`: `MouseEvent`) => `void`  } & `AnchorHTMLAttributes`<HTMLAnchorElement\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` |

##### Returns

{ `href`: `string` ; `onClick`: (`ev`: `MouseEvent`) => `void`  } & `AnchorHTMLAttributes`<HTMLAnchorElement\>

___

### classList

• `Optional` **classList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `host?` | `string` |
| `menuItem?` | `string` |
| `menuItemActive?` | `string` |
| `subMenuItem?` | `string` |
| `subMenuItemActive?` | `string` |
| `subMenuWrapper?` | `string` |

___

### menuItems

• **menuItems**: [CdpMenuItem](../modules.md#cdpmenuitem)[]
