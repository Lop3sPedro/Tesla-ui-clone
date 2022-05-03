import { useCallback, useContext, useEffect } from "react";

import ModelsContext from "./ModelsContext";

export function useModel(modelName: string) {
    const { registerModel, unregistedModel, getModelByName } = useContext(
        ModelsContext
    )

    useEffect(() => () => unregistedModel(modelName), [
        modelName,
        unregistedModel
    ])

    const getModel = useCallback(() => getModelByName(modelName), [
        getModelByName,
        modelName
    ])

    return { registerModel, getModel }
}

