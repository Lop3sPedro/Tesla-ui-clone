import React, { ReactNode } from 'react';

export interface CarModel {
    modelName: string;
    overlayNode: ReactNode;
    sectionRef: React.RefObject<HTMLElement>;
}

interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>;
    registeredModels: CarModel[];
    registerModel: (model: CarModel) => void;
    unregistedModel: (modelName: string) => void;
    getModelByName: (ModuleName: string) => CarModel | null //recebe o carro pelo nome, retorna o modelo, se não achar retorna nulo
}

export default React.createContext<ModelsContext>({} as ModelsContext)