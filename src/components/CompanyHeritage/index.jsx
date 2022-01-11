import TonyJacklin from '../../assets/pictures/Tony_Jacklin.jpg';
import Casuals from '../../assets/pictures/Casuals_80.jpg';
import { PrimaryParagraph } from '../Paragraph';

const heritageInformation = [
  {
    description: `Lyle & Scott — символ свободы. Символ, который станет нашим наследием.`,
    className: 'margin-bottom-12',
  },
  {
    description: `Бренд был признан на подиумах и в домах высокой моды. В то же время Lyle & Scott завоевал внимание молодёжных
        субкультур. Наша концепция оказалась близка звёздам мирового спорта и музыкантам. Футбольные фанаты знают
        золотого орла как символ стиля и престижа. А члены Британской Королевской Семьи оценили Lyle & Scott за высокое
        качество каждой детали.`,
    className: 'margin-bottom-12',
  },
  {
    description: `Lyle & Scott — символ объединения и отсутствия границ для самовыражения.`,
    className: 'margin-bottom-40',
  },
];

const CompanyHeritage = () => (
  <section className="vertical-margin-128">
    <div className="d-flex justify-content-center">
      <img className="mb-3" src={TonyJacklin} alt="Tony Jacklin" />
    </div>
    <div className="horizontal-padding-20">
      <h2 className="jost-500 mt-4">НАСЛЕДИЕ</h2>
      {heritageInformation.map(({ className, description }, index) => (
        <PrimaryParagraph className={className} key={index}>
          {description}
        </PrimaryParagraph>
      ))}
    </div>
    <div className="d-flex justify-content-center">
      <img src={Casuals} alt="Casuals" />
    </div>
  </section>
);

export default CompanyHeritage;
