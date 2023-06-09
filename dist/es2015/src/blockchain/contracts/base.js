var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DEFAULT_META_MAKER = () => ({});
class BaseContract {
    constructor(api, tableCodeConfig, name) {
        this.api = api;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.baseName = tableCodeConfig[name] || name;
    }
    get name() {
        return this.baseName;
    }
    getTableRows({ scope, table, table_key, lower_bound, upper_bound, limit, key_type, index_position, parseMetaAsJson, parseKeysAsJson, defaultJsonValues, getAllRows, }, prependResult) {
        return __awaiter(this, void 0, void 0, function* () {
            const keysAsJson = parseKeysAsJson || [];
            if (parseMetaAsJson) {
                keysAsJson.push('meta');
            }
            const result = yield this.api.getTableRows(this.name, scope || this.name, table, table_key, lower_bound, upper_bound, limit, key_type, index_position);
            if (keysAsJson.length > 0 && result.rows) {
                for (const row of result.rows) {
                    for (const keyAsJson of keysAsJson) {
                        const defaultValueMaker = (defaultJsonValues === null || defaultJsonValues === void 0 ? void 0 : defaultJsonValues[keyAsJson]) || DEFAULT_META_MAKER;
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        if (!row[keyAsJson]) {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            row[keyAsJson] = defaultValueMaker();
                        }
                        else {
                            try {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                row[keyAsJson] = JSON.parse(row[keyAsJson]);
                            }
                            catch (_) {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                row[keyAsJson] = defaultValueMaker();
                            }
                        }
                    }
                }
            }
            if (!getAllRows || !result.more || !result.next_key) {
                if (!prependResult) {
                    return result;
                }
                return Object.assign(Object.assign({}, result), { rows: [...prependResult, ...result.rows] });
            }
            return this.getTableRows({
                scope,
                table,
                table_key,
                lower_bound: result.next_key,
                upper_bound,
                limit,
                key_type,
                index_position,
                parseMetaAsJson,
                parseKeysAsJson,
                defaultJsonValues,
                getAllRows,
            }, result.rows);
        });
    }
    getSingleTableRow(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getTableRows(args);
            return result.rows[0];
        });
    }
}
export default BaseContract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RzL3NyYy9ibG9ja2NoYWluL2NvbnRyYWN0cy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVFBLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQWlCdEMsTUFBTSxZQUFZO0lBSWhCLFlBQVksR0FBWSxFQUFFLGVBQWdDLEVBQUUsSUFBWTtRQUN0RSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUNkLDZEQUE2RDtRQUM3RCxhQUFhO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFBO0lBQy9DLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDdEIsQ0FBQztJQUVLLFlBQVksQ0FBYSxFQUM3QixLQUFLLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsV0FBVyxFQUNYLEtBQUssRUFDTCxRQUFRLEVBQ1IsY0FBYyxFQUNkLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFVBQVUsR0FDSSxFQUFFLGFBQTRCOztZQUM1QyxNQUFNLFVBQVUsR0FBRyxlQUFlLElBQUksRUFBRSxDQUFDO1lBQ3pDLElBQUksZUFBZSxFQUFFO2dCQUNuQixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1lBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FDeEMsSUFBSSxDQUFDLElBQUksRUFDVCxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFDbEIsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsV0FBVyxFQUNYLEtBQUssRUFDTCxRQUFRLEVBQ1IsY0FBYyxDQUNmLENBQUE7WUFFRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3hDLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDN0IsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLEVBQUU7d0JBQ2xDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQSxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRyxTQUFTLENBQUMsS0FBSSxrQkFBa0IsQ0FBQTt3QkFDOUUsNkRBQTZEO3dCQUM3RCxhQUFhO3dCQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7NEJBQ25CLDZEQUE2RDs0QkFDN0QsYUFBYTs0QkFDYixHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQTt5QkFDckM7NkJBQU07NEJBQ0wsSUFBSTtnQ0FDRiw2REFBNkQ7Z0NBQzdELGFBQWE7Z0NBQ2IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7NkJBQzVDOzRCQUFDLE9BQU8sQ0FBQyxFQUFFO2dDQUNWLDZEQUE2RDtnQ0FDN0QsYUFBYTtnQ0FDYixHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQTs2QkFDckM7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUVELElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbEIsT0FBTyxNQUFNLENBQUE7aUJBQ2Q7Z0JBQ0QsdUNBQ0ssTUFBTSxLQUNULElBQUksRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUN6QzthQUNGO1lBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFhO2dCQUNuQyxLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsU0FBUztnQkFDVCxXQUFXLEVBQUUsTUFBTSxDQUFDLFFBQVE7Z0JBQzVCLFdBQVc7Z0JBQ1gsS0FBSztnQkFDTCxRQUFRO2dCQUNSLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsVUFBVTthQUNYLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLENBQUM7S0FBQTtJQUVLLGlCQUFpQixDQUFhLElBQW1COztZQUNyRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQWEsSUFBSSxDQUFDLENBQUE7WUFFeEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZCLENBQUM7S0FBQTtDQUNGO0FBRUQsZUFBZSxZQUFZLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhZEFwaSBmcm9tICcuLi9yZWFkQXBpJ1xuaW1wb3J0IHsgVGFibGVDb2RlQ29uZmlnIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQge1RhYmxlUmVzdWx0fSBmcm9tIFwiLi4vLi4vZW9zL3R5cGVzXCI7XG5cbmludGVyZmFjZSBEZWZhdWx0SnNvblZhbHVlTWFrZXIge1xuICBba2V5OiBzdHJpbmddOiAoKSA9PiBhbnlcbn1cblxuY29uc3QgREVGQVVMVF9NRVRBX01BS0VSID0gKCkgPT4gKHt9KTtcblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZVJvd3NBcmdzIHtcbiAgc2NvcGU/OiBzdHJpbmdcbiAgdGFibGU6IHN0cmluZ1xuICB0YWJsZV9rZXk/OiBzdHJpbmdcbiAgbG93ZXJfYm91bmQ/OiBudW1iZXIgfCBzdHJpbmdcbiAgdXBwZXJfYm91bmQ/OiBudW1iZXIgfCBzdHJpbmdcbiAgbGltaXQ/OiBudW1iZXJcbiAga2V5X3R5cGU/OiBzdHJpbmdcbiAgaW5kZXhfcG9zaXRpb24/OiBudW1iZXJcbiAgcGFyc2VNZXRhQXNKc29uPzogYm9vbGVhblxuICBwYXJzZUtleXNBc0pzb24/OiBzdHJpbmdbXSxcbiAgZGVmYXVsdEpzb25WYWx1ZXM/OiBEZWZhdWx0SnNvblZhbHVlTWFrZXIsXG4gIGdldEFsbFJvd3M/OiBib29sZWFuXG59XG5cbmNsYXNzIEJhc2VDb250cmFjdCB7XG4gIHByaXZhdGUgYXBpOiBSZWFkQXBpXG4gIHByaXZhdGUgcmVhZG9ubHkgYmFzZU5hbWU6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKGFwaTogUmVhZEFwaSwgdGFibGVDb2RlQ29uZmlnOiBUYWJsZUNvZGVDb25maWcsIG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuYXBpID0gYXBpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmJhc2VOYW1lID0gdGFibGVDb2RlQ29uZmlnW25hbWVdIHx8IG5hbWVcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlTmFtZVxuICB9XG5cbiAgYXN5bmMgZ2V0VGFibGVSb3dzPFJldHVyblR5cGU+KHtcbiAgICBzY29wZSxcbiAgICB0YWJsZSxcbiAgICB0YWJsZV9rZXksXG4gICAgbG93ZXJfYm91bmQsXG4gICAgdXBwZXJfYm91bmQsXG4gICAgbGltaXQsXG4gICAga2V5X3R5cGUsXG4gICAgaW5kZXhfcG9zaXRpb24sXG4gICAgcGFyc2VNZXRhQXNKc29uLFxuICAgIHBhcnNlS2V5c0FzSnNvbixcbiAgICBkZWZhdWx0SnNvblZhbHVlcyxcbiAgICBnZXRBbGxSb3dzLFxuICB9OiBUYWJsZVJvd3NBcmdzLCBwcmVwZW5kUmVzdWx0PzogUmV0dXJuVHlwZVtdKTogUHJvbWlzZTxUYWJsZVJlc3VsdDxSZXR1cm5UeXBlPj4ge1xuICAgIGNvbnN0IGtleXNBc0pzb24gPSBwYXJzZUtleXNBc0pzb24gfHwgW107XG4gICAgaWYgKHBhcnNlTWV0YUFzSnNvbikge1xuICAgICAga2V5c0FzSnNvbi5wdXNoKCdtZXRhJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hcGkuZ2V0VGFibGVSb3dzPFJldHVyblR5cGU+KFxuICAgICAgdGhpcy5uYW1lLFxuICAgICAgc2NvcGUgfHwgdGhpcy5uYW1lLFxuICAgICAgdGFibGUsXG4gICAgICB0YWJsZV9rZXksXG4gICAgICBsb3dlcl9ib3VuZCxcbiAgICAgIHVwcGVyX2JvdW5kLFxuICAgICAgbGltaXQsXG4gICAgICBrZXlfdHlwZSxcbiAgICAgIGluZGV4X3Bvc2l0aW9uXG4gICAgKVxuXG4gICAgaWYgKGtleXNBc0pzb24ubGVuZ3RoID4gMCAmJiByZXN1bHQucm93cykge1xuICAgICAgZm9yIChjb25zdCByb3cgb2YgcmVzdWx0LnJvd3MpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXlBc0pzb24gb2Yga2V5c0FzSnNvbikge1xuICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZU1ha2VyID0gZGVmYXVsdEpzb25WYWx1ZXM/LltrZXlBc0pzb25dIHx8IERFRkFVTFRfTUVUQV9NQUtFUlxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgaWYgKCFyb3dba2V5QXNKc29uXSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcm93W2tleUFzSnNvbl0gPSBkZWZhdWx0VmFsdWVNYWtlcigpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICByb3dba2V5QXNKc29uXSA9IEpTT04ucGFyc2Uocm93W2tleUFzSnNvbl0pXG4gICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICByb3dba2V5QXNKc29uXSA9IGRlZmF1bHRWYWx1ZU1ha2VyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWdldEFsbFJvd3MgfHwgIXJlc3VsdC5tb3JlIHx8ICFyZXN1bHQubmV4dF9rZXkpIHtcbiAgICAgIGlmICghcHJlcGVuZFJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgIHJvd3M6IFsuLi5wcmVwZW5kUmVzdWx0LCAuLi5yZXN1bHQucm93c10sXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0VGFibGVSb3dzPFJldHVyblR5cGU+KHtcbiAgICAgIHNjb3BlLFxuICAgICAgdGFibGUsXG4gICAgICB0YWJsZV9rZXksXG4gICAgICBsb3dlcl9ib3VuZDogcmVzdWx0Lm5leHRfa2V5LFxuICAgICAgdXBwZXJfYm91bmQsXG4gICAgICBsaW1pdCxcbiAgICAgIGtleV90eXBlLFxuICAgICAgaW5kZXhfcG9zaXRpb24sXG4gICAgICBwYXJzZU1ldGFBc0pzb24sXG4gICAgICBwYXJzZUtleXNBc0pzb24sXG4gICAgICBkZWZhdWx0SnNvblZhbHVlcyxcbiAgICAgIGdldEFsbFJvd3MsXG4gICAgfSwgcmVzdWx0LnJvd3MpXG4gIH1cblxuICBhc3luYyBnZXRTaW5nbGVUYWJsZVJvdzxSZXR1cm5UeXBlPihhcmdzOiBUYWJsZVJvd3NBcmdzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRUYWJsZVJvd3M8UmV0dXJuVHlwZT4oYXJncylcblxuICAgIHJldHVybiByZXN1bHQucm93c1swXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb250cmFjdFxuIl19