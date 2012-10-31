//https://github.com/sv01a/TypeScript-Knockoutjs/blob/master/knockout.d.ts
module knockout {
    interface koSubscription {
        dispose();
    }
    interface koExtendOptions {
        throttle?: number;
    }
    interface koExtend {
        ();
        extend(options: koExtendOptions);
    }
    interface koComputedOptions {
        read?: () =>any;
        write?: (value: any) =>void;
        owner?: any;
    }
    interface koComputed extends koSubscription {
        (evaluator: () => any): koExtend;
        (options: koComputedOptions): koExtend;
        (): any;
        subscribe(callback: (newValue: number) => void ): koSubscription;
        getDependenciesCount(): number;
        hasWriteFunction(): bool;
    };
    interface koObservableBase {
        valueHasMutated(): void;
        valueWillMutate(): void;
    }
    interface koObservableNumber extends koObservableBase {
        (newValue: number): void;
        (): number;
        subscribe(callback: (newValue: number) => void ): koSubscription;
    }
    interface koObservableString extends koObservableBase {
        (newValue: string): void;
        (): string;
        subscribe(callback: (newValue: string) => void ): koSubscription;
    }
    interface koObservableBool extends koObservableBase {
        (newValue: bool): void;
        (): bool;
        subscribe(callback: (newValue: bool) => void ): koSubscription;
    }
    interface koObservableAny extends koObservableBase {
        (newValue: any): void;
        (): any;
        subscribe(callback: (newValue: any) => void ): koSubscription;
    }
    interface koObservable {
        (value: number): koObservableNumber;
        (value: string): koObservableString;
        (value: bool): koObservableBool;
        (value: any): koObservableAny;
    }
    interface koObservableArrayBase extends koObservableBase {
        (newValue: any[]): void;
        (): any[];
        subscribe(callback: (newValue: any[]) => void ): koSubscription;

        pop(): any;
        push(...items: any[]): void;
        reverse(): any[];
        shift(): any;
        slice(start: number, end?: number): any[];
        sort(compareFn?: (a, b) => number): any[];
        splice(start: number): string[];
        splice(start: number, deleteCount: number, ...items: any[]): any[];
        unshift(...items: any[]): number;
        indexOf(item): number;

        remove(value): any;
        remove(predicate: (value) =>bool): any;
        removeAll();
        removeAll(arrayOfValues: any[]): any[];

        destroy(value);
        destroy(predicate: (value) =>bool): any;
        destroyAll();
        destroyAll(arrayOfValues: any[]): any[];
        replace(oldItem, newItem);
    }
    interface koObservableArray {
        (array: any[]): koObservableArrayBase;
        (): koObservableArrayBase;
    }

    export function applyBindings(viewModel? , rootNode?: HTMLElement);
    export function toJSON(viewModel, replacer? , space? ): string;
    export function toJS(viewModel): any;

    export var observable: koObservable;
    export var computed: koComputed;
    export var dependentObservable: koComputed;
    export var observableArray: koObservableArray;
};
module knockout.utils {
    export var fieldsIncludedWithJsonPost: any[];

    export function extend(target, source);
    export function arrayForEach(array: any[], action: (any) =>void );
    export function arrayIndexOf(array: any[], item: any);
    export function arrayFirst(array: any[], predicate: (item) =>bool, predicateOwner? ): any;
    export function arrayFilter(array: any[], predicate: (item) =>bool);
    export function arrayGetDistinctValues(array: any[]);
    export function arrayMap(array: any[], mapping: (item) =>any);
    export function arrayPushAll(array: any[], valuesToPush: any[]);
    export function arrayRemoveItem(array: any[], itemToRemove);
    export function getFormFields(form: HTMLFormElement, fieldName: string): HTMLElement[];
    export function parseJson(jsonString: string): any;
    export function registerEventHandler(element: HTMLElement, eventType: string, handler: (event: Event) =>void );
    export function stringifyJson(data, replacer? , space? );
    export function range(min: number, max: number);
    export function toggleDomNodeCssClass(node: HTMLElement, className: string, shouldHaveClass?: bool);
    export function triggerEvent(element: HTMLElement, eventType: string);
    export function unwrapObservable(value);
}

declare var ko: knockout;