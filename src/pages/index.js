import { Introducao } from './components/Introdução'

function Index() {
  return <div className='home'>

    <Introducao />

    <h1>A saúde no Brasil</h1>

    <h2>1- SUS</h2>
    <p>O principal órgão responsável pela saúde no Brasil é o <abbr title="Sistema Único de Saúde">SUS</abbr>.</p>
    <p>O SUS foi criado em 1988 pela Constituição Federal. Atualmente é o sistema de saúde pública que mais atinge uma população no mundo, atendendo cerca de 190 milhões de pessoas e 80% delas são totalmente dependentes para qualquer tipo de atendimento.</p>

    <h2>2- Quem pode usá-lo?</h2>
    <p>O SUS é financiado pelo arrecadamento de impostos, sendo assim ele é um direito de todos os cidadãos brasileiros. Ele é integral, igualitário e universal, ou seja, não faz, e nem deve fazer qualquer distinção entre os usuários. Inclusive, estrangeiros que estiverem no Brasil e por algum motivo precisarem de alguma assistência de saúde, podem utilizar de toda rede do SUS gratuitamente.</p>

    <h2>3- O que o SUS proporciona?</h2>
    <p>Desde serviços de baixa, média e alta complexidade, o SUS oferece consultas médicas, medicamentos gratuitos, visita e atendimento domiciliar, além de atendimentos de urgência e emergência. "Se você entra no SUS, você é bem atendido". As pessoas que reclamam é porque não conseguem agendamento ou vaga.</p>

  </div>;
}
export default Index;
