import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';
import requerimentosService from '../services/requerimentoService';
import './RequerimentoForm.css';

export function RequerimentoForm() {
  const navigate = useNavigate();
  const { deslogar } = useAuth();
  const hoje = new Date().toLocaleDateString('pt-BR');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      data: hoje,
    },
  });

  async function onSubmit(data) {
    try {
      await requerimentosService.cadastrar(data);
      reset({ data: hoje });
      navigate('/requerimentos');
    } catch (erro) {
      if (erro?.status === 401) {
        deslogar();
      }
    }
  }

  return (
    <div className="requerimento-form-container">
      <h2>Novo Requerimento</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="requerimento-form">

        <div className="form-group">
          <label htmlFor="tipo">Tipo de Requerimento</label>
          <select
            id="tipo"
            {...register('tipo', { required: 'Tipo é obrigatório' })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Declaração de Matrícula">Declaração de Matrícula</option>
            <option value="Histórico Escolar">Histórico Escolar</option>
            <option value="Atestado de Frequência">Atestado de Frequência</option>
            <option value="Revisão de Nota">Revisão de Nota</option>
            <option value="Trancamento de Disciplina">Trancamento de Disciplina</option>
          </select>
          {errors.tipo && <span className="form-error">{errors.tipo.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            rows={5}
            placeholder="Descreva detalhadamente o seu requerimento..."
            {...register('descricao', {
              required: 'Descrição é obrigatório',
              minLength: {
                value: 10,
                message: 'A descrição deve ter no mínimo 10 caracteres.',
              },
            })}
          />
          {errors.descricao && <span className="form-error">{errors.descricao.message}</span>}
        </div>

        <div className="form-group form-group-data">
          <label htmlFor="data">Data do Requerimento</label>
          <input
            id="data"
            type="text"
            readOnly
            {...register('data')}
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-cancelar" onClick={() => navigate('/requerimentos')}>
            Cancelar
          </button>
          <button type="submit" className="btn-salvar">
            Salvar
          </button>
        </div>

      </form>
    </div>
  );
}