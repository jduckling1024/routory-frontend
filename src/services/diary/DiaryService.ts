import instance from '../../utils/interceptor';
import DiarySaveRequest from './DiarySaveRequest';
import DiarySaveResponse from './DiarySaveResponse';

const save = async (body: DiarySaveRequest) => {
    return await instance.post<DiarySaveRequest, DiarySaveResponse>('/api/diary', body);
}

const api = {
    save
}

export default api;