import { CollectionView } from "./CollectionsView";
import { User, UserProps } from "../models/Users";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    console.log("20");
    new UserShow(itemParent, model).render();
  }
}
