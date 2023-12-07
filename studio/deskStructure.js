import { FaBuilding, FaFolderOpen, FaShoppingCart, FaCog, FaPhone, FaEdit, FaList } from 'react-icons/fa'
export const myStructure = (S) =>
    S.list()
        .title('Content')
        .items([
            // Operator
            S.listItem()
                .title('Operatører')
                .icon(FaBuilding)
                .child(
                    S.documentTypeList('operator')
                        .title('Operatører')
                        .child(operatorId =>
                            S.list()
                                .title('Details')
                                .items([
                                    // For the subscriptions of the operator
                                    S.listItem()
                                        .title('Abonnementer for Operator')
                                        .icon(FaList)
                                        .child(
                                            S.documentList()
                                                .schemaType('subscription')
                                                .title('Abonnementer')
                                                .filter('_type == "subscription" && operator._ref == $operatorId')
                                                .params({ operatorId })
                                        ),
                                    // For editing the operator itself
                                    S.listItem()
                                        .title('Edit Operatør')
                                        .icon(FaEdit)
                                        .child(
                                            S.editor()
                                                .id(operatorId)
                                                .schemaType('operator')
                                                .documentId(operatorId)
                                        )
                                ])
                        )
                ),

            // Subscription
            S.listItem()
                .title('Abonnementer')
                .icon(FaPhone)
                .child(
                    S.documentTypeList('subscription')
                        .title('Abonnementer')
                ),

            // Dealer (Note: You provided 'category' twice, assuming one of them should be 'dealer')
            S.listItem()
                .title('Dealere')
                .icon(FaShoppingCart)
                .child(
                    S.documentTypeList('dealer')
                        .title('Dealere')
                ),

            // Service
            S.listItem()
                .title('Tjenester')
                .icon(FaCog)
                .child(
                    S.documentTypeList('service')
                        .title('Tjenester')
                ),

            // Category
            S.listItem()
                .title('Kategorier')
                .icon(FaFolderOpen)
                .child(
                    S.documentTypeList('category')
                        .title('Kategorier')
                )
        ]);