import '../styles/question.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

export function Question(props: QuestionProps) {
  const { content, author } = props;

  return (
    <div className='question'>
      <p>{content}</p>
      <footer>
        <div className='user-info'>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
      </footer>
    </div>
  );
}
