import React from 'react';

const ProgramList = ({ programs}) => {
  return programs.map((program, index) => (
    <div
			style={{marginLeft: 'auto', marginRight: 'auto'}}
      className={'program-row'}
      key={program.id}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', flex: '5', marginRight: '30px'}}key={program.id}>
        <div>
          {program.name}
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flex: '5', marginRight: '30px'}}key={program.id}>
				<div>
					{`${program.date.split('-')[2]}/${program.date.split('-')[1]}/${program.date.split('-')[0]}`}
				</div>
				<div>
					{program.time}
				</div>
				<div>
					{program.duration}
				</div>
      </div>
    </div>
  ));
};

export default ProgramList;


