import React from 'react';

interface ProfilePercentProps {
  percentage: number;
}

const ProfilePercent: React.FC<ProfilePercentProps> = ({ percentage }) => {
  const barStyle = {
    width: `${percentage}%`,
    backgroundColor: 'green',
    borderRadius: '10px',
  };

  const topbox = {
    width: '1170px',
    height: '120px',
    borderWidth: '2px',
    borderColor: 'black',
    borderStyle: 'solid',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginLeft: '20px',
  };

  const handleEditProfile = () => {
    console.log('プロフィールを編集');
  };

  return (
    <div className="profile-percent" style={topbox}>
      <div style={{ fontSize: 22, fontWeight: 'bold', marginLeft: '10px', marginTop: '10px' }}>
        プロフィールを登録して、オファーをゲットしよう！
      </div>
      <div
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          display: 'flex',
          marginTop: '15px',
        }}
      >
        <button style={buttonStyle} onClick={handleEditProfile}>
          スキルを登録しよう
        </button>
        <div style={{ marginRight: '55px' }}>
          <div style={{ flexDirection: 'row', display: 'flex', gap: '20px' }}>
            <div className="percentage">プロフィール入力率</div>
            <div className="percentage">{percentage}%完了</div>
          </div>
          <div
            style={{
              width: 450,
              backgroundColor: '#e2e2e2',
              borderRadius: '10px',
              border: '1px solid gray',
            }}
          >
            <div />
            <div className="progress" style={barStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePercent;